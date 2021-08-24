export const findById = (array, id, selector = "id") => {
    return array.find((item) => item[selector]) === parseInt(id)
};
export const getObjectById = (object, id, selector = "id") => {
    const keys = Object.keys(object);
    for (const key of keys) {
        if (object[key][selector] + "" === "" + id) {
            return object[key];
        }
    }
    return null;
};
