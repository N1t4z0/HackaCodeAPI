-- CreateTable
CREATE TABLE "clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(255),
    "apellido" VARCHAR(255),
    "direccion" VARCHAR(255),
    "dni" VARCHAR(20),
    "fecha_nac" DATE,
    "nacionalidad" VARCHAR(50),
    "celular" VARCHAR(20),
    "email" VARCHAR(255),

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "empleados" (
    "id_empleado" SERIAL NOT NULL,
    "nombre" VARCHAR(255),
    "apellido" VARCHAR(255),
    "direccion" VARCHAR(255),
    "dni" VARCHAR(20),
    "fecha_nac" DATE,
    "nacionalidad" VARCHAR(50),
    "celular" VARCHAR(20),
    "email" VARCHAR(255),
    "cargo" VARCHAR(100),
    "sueldo" DECIMAL(10,2),

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("id_empleado")
);

-- CreateTable
CREATE TABLE "paquetesturisticos" (
    "codigo_paquete" SERIAL NOT NULL,
    "costo_paquete" DECIMAL(10,2),
    "nombre_paquete" VARCHAR(30),
    "url_image" VARCHAR(500),

    CONSTRAINT "paquetesturisticos_pkey" PRIMARY KEY ("codigo_paquete")
);

-- CreateTable
CREATE TABLE "serviciosenpaquetes" (
    "id" SERIAL NOT NULL,
    "codigo_paquete" INTEGER,
    "codigo_servicio" INTEGER,

    CONSTRAINT "serviciosenpaquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "serviciosturisticos" (
    "codigo_servicio" SERIAL NOT NULL,
    "nombre" VARCHAR(255),
    "descripcion_breve" VARCHAR(255),
    "destino_servicio" VARCHAR(255),
    "fecha_inicio" DATE,
    "fecha_fin" DATE,
    "costo_servicio" DECIMAL(10,2),
    "url_image" VARCHAR(500),

    CONSTRAINT "serviciosturisticos_pkey" PRIMARY KEY ("codigo_servicio")
);

-- CreateTable
CREATE TABLE "ventas" (
    "num_venta" SERIAL NOT NULL,
    "fecha_venta" DATE,
    "medio_pago" VARCHAR(50),
    "id_cliente" INTEGER,
    "id_empleado" INTEGER,
    "codigo_servicio" INTEGER,
    "codigo_paquete" INTEGER,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("num_venta")
);

-- AddForeignKey
ALTER TABLE "serviciosenpaquetes" ADD CONSTRAINT "serviciosenpaquetes_codigo_paquete_fkey" FOREIGN KEY ("codigo_paquete") REFERENCES "paquetesturisticos"("codigo_paquete") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "serviciosenpaquetes" ADD CONSTRAINT "serviciosenpaquetes_codigo_servicio_fkey" FOREIGN KEY ("codigo_servicio") REFERENCES "serviciosturisticos"("codigo_servicio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_codigo_paquete_fkey" FOREIGN KEY ("codigo_paquete") REFERENCES "paquetesturisticos"("codigo_paquete") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_codigo_servicio_fkey" FOREIGN KEY ("codigo_servicio") REFERENCES "serviciosturisticos"("codigo_servicio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "empleados"("id_empleado") ON DELETE NO ACTION ON UPDATE NO ACTION;
