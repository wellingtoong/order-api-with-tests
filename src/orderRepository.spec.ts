import { OrderRepository } from ".";

describe("OrderRepository", () => {
  let repository: OrderRepository;

  beforeEach(() => {
    repository = new OrderRepository();
  });

  test("Deve criar um novo pedido", () => {
    const order = repository.create("Produto A", 2);
    expect(order).toHaveProperty("id");
    expect(order.product).toBe("Produto A");
    expect(order.quantity).toBe(2);
  });

  test("Deve listar pedidos", () => {
    repository.create("Produto B", 3);
    const orders = repository.findAll();
    expect(orders.length).toBeGreaterThan(0);
  });

  test("Deve buscar pedido por ID", () => {
    const order = repository.create("Produto C", 4);
    const foundOrder = repository.findById(order.id);
    expect(foundOrder).toEqual(order);
  });

  test("Deve falhar ao buscar um pedido inexistente", () => {
    const foundOrder = repository.findById("999");
    expect(foundOrder).toBeUndefined();
  });

  test("Deve excluir pedido existente", () => {
    const order = repository.create("Produto D", 5);
    const deleted = repository.delete(order.id);
    expect(deleted).toBe(true);
    expect(repository.findById(order.id)).toBeUndefined();
  });

});
