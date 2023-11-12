// Token de autenticação que usaremos para gerar uma reunião e conectar-se a ela
export const authToken = process.env.REACT_APP_TOKEN_VIDEO;

// Chamada de API para criar reunião
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  // Desestruturando o roomId da resposta
  const { roomId } = await res.json();
  return roomId;
};