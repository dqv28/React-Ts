
export const upload = (data: any) => {
    return fetch('https://api.cloudinary.com/v1_1/dywccbjry/image/upload',{
        method: 'POST',
        body: data,
    }).then(response => response.json())
}