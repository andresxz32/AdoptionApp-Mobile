export class Functions {
    private static _instancia: Functions;

    public static run(): Functions {
        if (!Functions._instancia) {
            Functions._instancia = new Functions();
        }
        return Functions._instancia;
    }

    public removeDuplicates(array) {
        return Array.from(new Set(array.map(a => a.name)))
            .map(name => {
                return array.find(a => a.name === name)
            })
    }

}