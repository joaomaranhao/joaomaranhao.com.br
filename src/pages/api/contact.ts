import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_PASSWORD)

export default async (req, res) => {
  const { name, email, message } = req.body.data

  const msg = {
    from: 'joaomaranhao.mail.sender@gmail.com',
    to: 'joaofelipemaranhao@gmail.com',
    subject: `Contato do meu site, mensagem de ${name}`,
    html: `<p>Você tem um novo email!<p><br>
    <p><strong>Nome: </strong> ${name} </p> <br>
    <p><strong>Email: </strong> ${email} </p> <br>
    <p><strong>Mensagem: </strong> ${message} </p> <br>
    `
  }

  try {
    await sgMail.send(msg)
    res.status(200).json(res.body)
  } catch (err) {
    res.status(500).json(err)
  }
}
