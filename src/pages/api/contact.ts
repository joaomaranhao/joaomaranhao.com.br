import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  })

  try {
    const emailToSend = await transporter.sendMail({
      from: email,
      to: 'joaofelipemaranhao@gmail.com',
      subject: `Contato do meu site, mensagem de ${name}`,
      html: `<p>Você tem um novo email!<p><br>
      <p><strong>Nome: </strong> ${name} </p> <br>
      <p><strong>Email: </strong> ${email} </p> <br>
      <p><strong>Mensagem: </strong> ${message} </p> <br>
      `
    })

    console.log('Mensagem enviada!', emailToSend.messageId)
  } catch (err) {
    console.error(err)
  }

  res.status(200).json(req.body)
}
