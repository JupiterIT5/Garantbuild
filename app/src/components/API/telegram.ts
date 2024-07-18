const baseURL = "https://api.telegram.org/bot7309874600:AAHyMJWKXyz1ToTbGaDV2PdsDN6jaPV_y88/"

export const sendMessage = async (data: string): Promise<void> => {
    const url = `${baseURL}sendMessage?chat_id=5186745004&text=${data}`
    await fetch(url)
}