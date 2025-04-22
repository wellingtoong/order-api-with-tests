import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

// Entidade Order
class Order {
    constructor(
        public id: string,
        public product: string,
        public quantity: number
    ) { }
}

// Repository para gerenciar pedidos
export class OrderRepository {
    private orders: Order[] = [];

    create(product: string, quantity: number): Order {
        const order = new Order(uuidv4(), product, quantity);
        this.orders.push(order);
        return order;
    }

    findAll(): Order[] {
        return this.orders;
    }

    findById(id: string): Order | undefined {
        return this.orders.find(order => order.id === id);
    }

    update(id: string, product: string, quantity: number): Order | null {
        const order = this.findById(id);
        if (!order) return null;
        order.product = product;
        order.quantity = quantity;
        return order;
    }

    delete(id: string): boolean {
        const index = this.orders.findIndex(order => order.id === id);
        if (index === -1) return false;
        this.orders.splice(index, 1);
        return true;
    }
}

const orderRepository = new OrderRepository();

app.get('/', (req: Request, res: Response): any => {
    res.json({ message: 'Olá, mundo! API rodando com TypeScript 🚀' });
});

// Rotas
app.post('/orders', (req: Request, res: Response): any => {
    const { product, quantity } = req.body;
    const order = orderRepository.create(product, quantity);
    res.status(201).json(order);
});

app.get('/orders', (_req: Request, res: Response): any => {
    res.json(orderRepository.findAll());
});

app.get('/orders/:id', (req: Request, res: Response): any => {
    const order = orderRepository.findById(req.params.id);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
});

app.put('/orders/:id', (req: Request, res: Response): any => {
    const { product, quantity } = req.body;
    const order = orderRepository.update(req.params.id, product, quantity);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
});

app.delete('/orders/:id', (req: Request, res: Response): any => {
    const deleted = orderRepository.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send();
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${4000}`);
    });
}

export default app;

