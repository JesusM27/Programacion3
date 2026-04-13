const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from empleados', (err, empleados) => {
            if (err) {
                res.json(err);
            }
            res.json(empleados);
        });
    });
};

controller.edit = (req, res) => {

    const { idemp } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from empleados where idemp=?', [idemp], (err, empleados) => {
            res.json(empleados[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into empleados set ?', [data], (err, empleados) => {
            res.json(empleados);
        });
    });
};

controller.update = (req, res) => {

    const { idemp } = req.params;
    const nuevo_empleados = req.body;

    req.getConnection((err, conn) => {
        conn.query('update empleados set ? where idemp = ?', [nuevo_empleados, idemp], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { idemp } = req.params;

    req.getConnection((err, conn) => {
        conn.query('update empleados set estado="INACTIVO" where idemp = ?', [idemp], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;