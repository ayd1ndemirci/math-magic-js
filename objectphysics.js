class ObjectPhysics {
    constructor(gravity) {
        this.gravity = gravity;
        this.velocity = 0;
        this.position = 0;
        this.dt = 0.1;
    }

    update() {
        this.velocity += this.gravity * this.dt;
        this.position += this.velocity * this.dt;
    }
}

const obj = new ObjectPhysics(9.81);
for (let i = 0; i < 10; i++) {
    obj.update();
    console.log(`Zaman: ${(i+1)*0.1}s | Konum: ${obj.position.toFixed(2)}m | Hız: ${obj.velocity.toFixed(2)}m/s`);
}
