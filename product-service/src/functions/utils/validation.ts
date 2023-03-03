export const createProductValidation = (data) => {
    const { title, description, price, count } = data;
    let isValid = true;
    const error = {
        text: '',
        type: '',
    };

    if (!title?.trim()) {
        error.text = "Title is the requirement field and couldn't be empty";
        error.type = 'title';
    }

    if (!description?.trim()) {
        error.text = "Description is the requirement field and couldn't be empty"
        error.type = 'description'
    }

    if (price?.isNaN) {
        error.text = "Price should be only digits and couldn't be empty"
        error.type = 'price'
    }

    if (count?.isNaN) {
        error.text = "Count should be only digits and couldn't be empty"
        error.type = 'count'
    }

    if (error.text) {
        isValid = false
    }

    return { error, data, isValid };
}