// // import { NextResponse } from 'next/server';
// // import nodemailer from 'nodemailer';

// // export async function POST(request: Request) {
// //     const { answers } = await request.json();

// //   // GmailなどのSMTPサーバーを設定します
// //   // 注意: セキュリティのため、ユーザー名やパスワードは環境変数を使用することを強くお勧めします
// //     const transporter = nodemailer.createTransport({
// //     host: 'smtp.gmail.com',
// //     port: 465,
// //     secure: true, // true for 465, false for other ports
// //     auth: {
// //       // ご自身のGmailアカウントとアプリパスワードを設定してください
// //       user: process.env.EMAIL_USER, // 例: 'your-email@gmail.com'
// //       pass: process.env.EMAIL_PASS, // 例: 'your-app-password'
// //     },
// // });

// // try {
// //     // メールの内容を設定
// //     await transporter.sendMail({
// //         from: `"Webサイトからの通知" <${process.env.EMAIL_USER}>`, // 送信元
// //         to: 'ryoga3or1@gmail.com', // ★ここにメールを送信したいアドレスを設定
// //         subject: '【Webサイト】新しいお問い合わせがありました',
// //         text: `お問い合わせ内容:\n\n${JSON.stringify(answers, null, 2)}`,
// //         html: `
// //             <h1>新しいお問い合わせ</h1>
// //             <p>Webサイトから新しいお問い合わせがありました。</p>
// //             <h2>回答内容:</h2>
// //             <pre>${JSON.stringify(answers, null, 2)}</pre>
// //         `,
// //     });

// //     return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
// //     } catch (error) {
// //     console.error(error);
// //     return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
// //     }
// // }

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { answers } = await request.json();

//     // 1. メール送信の設定（Gmailの例）
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER, // あなたのGmailアドレス
//         pass: process.env.EMAIL_PASS, // あなたのアプリパスワード
//       },
//     });

//     // 2. メールの内容を設定
//     const mailOptions = {
//       from: `"Webサイトからの通知" <${process.env.EMAIL_USER}>`,
//       to: 'ryoga3or1@gmail.com', // ★★★ 通知を受け取りたいメールアドレス
//       subject: '【Webサイト】新しいお問い合わせがありました',
//       html: `
//         <h1>お問い合わせがありました</h1>
//         <p>回答内容は以下の通りです。</p>
//         <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${JSON.stringify(answers, null, 2)}</pre>
//       `,
//     };

//     // 3. メールを送信
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: 'メールの送信に成功しました' }, { status: 200 });

//   } catch (error) {
//     // 4. エラーハンドリング
//     console.error("メール送信中にサーバー側でエラーが発生しました:", error);
//     return NextResponse.json({ message: 'メールの送信に失敗しました' }, { status: 500 });
//   }
// }


// 2　ダーーーー

// import { NextResponse } from 'next/server';
// import fs from 'fs/promises';
// import path from 'path';

// export async function POST(request: Request) {
//   try {
//     const answers = await request.json();

//     // 保存するデータに受付日時を追加
//     const dataToSave = {
//       receivedAt: new Date().toISOString(),
//       ...answers,
//     };

//     // 保存先のファイルパスを指定 (プロジェクトのルートに data.json という名前で保存)
//     const filePath = path.join(process.cwd(), 'data.json');

//     // 既存のデータを読み込む
//     let existingData = [];
//     try {
//       const fileContent = await fs.readFile(filePath, 'utf-8');
//       existingData = JSON.parse(fileContent);
//     } catch (error) {
//       // ファイルが存在しない場合は何もしない (初回実行時)
//     }

//     // 新しいデータを追加して、ファイルに書き込む
//     existingData.push(dataToSave);
//     await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

//     console.log('データが正常にファイルに保存されました。');
//     return NextResponse.json({ message: 'データは正常に保存されました' }, { status: 200 });

//   } catch (error) {
//     console.error('データの保存中にエラーが発生しました:', error);
//     return NextResponse.json({ message: 'データの保存に失敗しました' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    // 保存するデータに、一意のIDと受付日時を追加
    const submissionId = `submission_${Date.now()}`;
    const dataToSave = {
      id: submissionId,
      receivedAt: new Date().toISOString(),
      ...answers,
    };

    // Vercel KVにデータを保存します
    // 'submissions' という名前のリストに、今回のデータを追加
    await kv.lpush('submissions', dataToSave);

    console.log('データがVercel KVに正常に保存されました。');
    return NextResponse.json({ message: 'データは正常に保存されました' }, { status: 200 });

  } catch (error) {
    console.error('データの保存中にエラーが発生しました:', error);
    return NextResponse.json({ message: 'データの保存に失敗しました' }, { status: 500 });
  }
}