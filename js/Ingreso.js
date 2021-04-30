class Ingreso extends Dato{
    static cosntadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.cosntadorIngresos;
    }

    get id(){
        return this._id;
    }
}