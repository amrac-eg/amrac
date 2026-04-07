import nodemailer from "nodemailer";

export const sendContactEmail = async ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // 1. إرسال الرسالة إلى مشرف الموقع
    const info = await transporter.sendMail({
      from: `"نموذج التواصل" <${process.env.SMTP_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: "📩 رسالة جديدة من نموذج التواصل",
      html: `
        <h3>📨 تفاصيل الرسالة:</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>رقم الجوال:</strong> ${phone}</p>
        <p><strong>الرسالة:</strong><br/>${message}</p>
      `,
    });

    console.log("✅ تم إرسال البريد إلى المشرف:", info);

    // 2. إرسال رد تلقائي للمرسل
    const autoReply = await transporter.sendMail({
      from: `"فريق أمراك" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "📬 تم استلام رسالتك - أمراك",
      html: `
    <div style="direction: rtl; font-family: 'Arial', sans-serif; line-height: 1.8; color: #333; text-align: right;">
      <p>مرحبًا ${name}،</p>

      <p>شكرًا لتواصلك معنا في <strong>أمراك</strong>، نود إبلاغك بأنه قد تم استلام رسالتك بنجاح.</p>

      <p>سيقوم أحد أعضاء فريقنا بمراجعة رسالتك والرد عليك في أقرب وقت ممكن. نحن في <strong>أمراك</strong> نحرص على تقديم أفضل تجربة ودعم ممكن لعملائنا.</p>

      <hr style="margin: 24px 0;" />

      <p style="font-size: 14px; color: #555;">
        في حال كان لديك أي استفسارات إضافية، لا تتردد في الرد على هذا البريد أو التواصل معنا عبر الموقع الإلكتروني.
      </p>

      <br/>

      <p>مع أطيب التحيات،<br/>
      فريق <strong>أمراك</strong></p>

      <p style="font-size: 12px; color: #999;">هذه رسالة إلكترونية تلقائية، يرجى عدم الرد عليها مباشرة.</p>
    </div>
  `,
    });

    console.log("📤 تم إرسال الرد التلقائي للمرسل:", autoReply);
  } catch (error) {
    console.error("❌ فشل في إرسال البريد:", error);
    throw error;
  }
};
