# Kadim Defter — Kurulum

Statik tarih blogu + yönetim paneli (Sveltia CMS). Yazılar `content/` klasöründe durur; her kayıtta Netlify siteyi otomatik yeniden üretir.

## 1. GitHub
1. GitHub'da yeni bir depo açın (ör. `kadim-defter`).
2. Bu klasörün içindekileri (zip'in içi) depoya yükleyin.
3. `static/admin/config.yml` içindeki `repo:` satırını `KULLANICI/DEPO` olarak düzeltin.

## 2. Yayın (Netlify, ücretsiz)
1. netlify.com → Add new site → Import from GitHub → depoyu seçin. Ayarlar `netlify.toml`'dan otomatik gelir.
2. Site açılınca adresi `content/settings.json` içindeki `siteUrl` alanına yazın (yönetim panelindeki "Site ayarları"ndan da olur). Kendi alan adınızı Netlify → Domain management'tan bağlayabilirsiniz.
3. İletişim formu Netlify Forms ile çalışır: mesajlar Netlify → Forms bölümünde toplanır, e-posta bildirimi ayarlanabilir.

## 3. Yönetim paneli
- Adres: `https://SITE-ADRESINIZ/admin/` (telefon ve bilgisayarda çalışır).
- Giriş: GitHub → "Token ile giriş". GitHub → Settings → Developer settings → Fine-grained token: yalnızca bu depo, "Contents: Read and write" izni.
- Yazı kaydedince GitHub'a kaydedilir, Netlify ~1 dakikada siteyi günceller.

## 4. Google
- Search Console'a siteyi ekleyip `/sitemap.xml` adresini gönderin.

## Yazı biçimi
Standart Markdown. Not kutusu için `> **Tarihçi Notu:** metin`, ikinci kutu için `> **İlginç Bilgi:** metin`. Görselde tırnak içindeki başlık alt yazı olur: `![açıklama](/img/dosya.jpg "Alt yazı")`. Kaynakça için son bölüm `## Kaynakça` olsun.
Hakkında/Gizlilik metinlerinde `{mail}` yazan yer e-posta bağlantısına dönüşür.

## Yayına almadan önce
Örnek yazıların çoğu yer tutucudur ("Bu yazının tam metni…"). Gerçek içerik yazana kadar bunları panelden "Taslak" yapın veya silin.
