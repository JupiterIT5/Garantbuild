export const sendMessage = async (data: string): Promise<void> => {
    const url = `${baseURL}sendMessage?chat_id=5186745004&text=${data}`
    await fetch(url)
}
