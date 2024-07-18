export const sendMessage = async (data: string): Promise<void> => {
    const url = `${baseURL}sendMessage?chat_id=514610145&text=${data}`
    await fetch(url)
}
