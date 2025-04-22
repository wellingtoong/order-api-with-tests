import request from "supertest";
import app from "./index";

describe("API Integration Tests", () => {

  test("Deve criar um pedido via API", async () => {
    const response = await request(app).post("/orders")
      .send({
        product: "Produto X",
        quantity: 5,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  test("Deve listar os pedidos via API", async () => {
    await request(app).post("/orders").send({
      product: "Produto Y",
      quantity: 3,
    });

    const response = await request(app).get("/orders");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar erro ao buscar pedido inexistente via API", async () => {
    const response = await request(app).get("/orders/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Order not found");
  });

  test("Deve criar e deletar um pedido existente (204 No Content)", async () => {
    // Criar um novo pedido
    const createResponse = await request(app).post("/orders").send({
      product: "Produto para deletar",
      quantity: 2,
    });

    // Obtém o ID do pedido criado
    const orderId = createResponse.body.id;
    expect(createResponse.status).toBe(201);
    expect(orderId).toBeDefined();

    // Deletar o pedido recém-criado
    const deleteResponse = await request(app).delete(`/orders/${orderId}`);

    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.body).toEqual({});
  });

  test("Deve retornar erro ao tentar deletar um pedido inexistente (404 Not Found)", async () => {
    const response = await request(app).delete("/orders/999999");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Order not found" });
  });
});
