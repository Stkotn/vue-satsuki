const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });
const xml2js = require("xml2js");

exports.getNoteArticles = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      // RSSフィードのURL（NoteのRSSフィードURLをここに入力）
      const rssUrl = "/note-rss/europe_balkan/rss"; 

      // RSSフィードの取得
      const response = await axios.get(rssUrl, { responseType: 'text' });

      // XMLをJSONに変換
      const parser = new xml2js.Parser();
      parser.parseString(response.data, (err, result) => {
        if (err) {
          res.status(500).send("XMLの解析に失敗しました");
          return;
        }

        // 結果をクライアントに送信
        res.status(200).send(result.rss.channel[0].item);  // 記事の配列を返す
      });
    } catch (error) {
      console.error("APIリクエストのエラー", error);
      res.status(500).send("RSSフィードの取得に失敗しました");
    }
  });
});
