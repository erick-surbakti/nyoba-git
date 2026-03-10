# Some of the shortcut

1. Konfigurasi Awal
Digunakan untuk mengatur identitas pengirim pada setiap commit.

git config --global user.name "Nama Kamu": Mengatur nama pengguna.

git config --global user.email "email@kamu.com": Mengatur email pengguna.

git config --list: Melihat semua konfigurasi yang aktif.

2. Memulai Repositori
git init: Membuat repositori lokal baru di folder saat ini.

git clone <url>: Menyalin repositori dari GitHub ke komputer lokal.

3. Siklus Perubahan (Staging & Committing)
git status: Melihat daftar file yang berubah dan mana yang belum di-stage.

git add .: Menambahkan semua file yang berubah ke staging area.

git add <nama-file>: Menambahkan file spesifik ke staging area.

git commit -m "Pesan commit": Menyimpan perubahan dari staging area ke riwayat lokal.

git commit --amend: Mengubah pesan commit terakhir (sebelum di-push).

4. Sinkronisasi dengan GitHub (Remote)
git remote add origin <url>: Menghubungkan repo lokal ke repo GitHub.

git push -u origin <nama-branch>: Mengirim commit lokal ke GitHub (sekaligus mengatur upstream).

git push: Mengirim perubahan ke GitHub (setelah upstream diatur).

git pull: Mengambil dan menggabungkan perubahan terbaru dari GitHub ke lokal.

git fetch: Mengambil data terbaru dari GitHub tanpa langsung menggabungkannya (merge).

5. Percabangan (Branching)
git branch: Melihat daftar branch yang ada.

git branch <nama-branch>: Membuat branch baru.

git checkout <nama-branch>: Berpindah ke branch tertentu.

git checkout -b <nama-branch>: Membuat branch baru dan langsung berpindah ke sana.

git merge <nama-branch>: Menggabungkan branch tertentu ke branch yang sedang aktif.

git branch -d <nama-branch>: Menghapus branch lokal.

6. Membatalkan Perubahan (Undo)
git checkout -- <nama-file>: Membatalkan perubahan pada file yang belum di-stage.

git reset HEAD <nama-file>: Mengeluarkan file dari staging area (unstage).

git reset --hard HEAD~1: Menghapus commit terakhir secara permanen (hati-hati!)


# Step 1: Persiapan di Lokal (Laptop)
Masuk ke folder project lo di terminal, lalu jalankan:

git init (Bikin "buku catatan" Git di folder itu).

git branch -M main (Pastiin nama branch utamanya main, bukan master, biar sinkron sama GitHub).

git add . (Masukin semua file TypeScript/project lo ke "keranjang" siap angkut).

git commit -m "feat: initial commit project TS" (Kasih label/catatan buat perubahan yang lo buat).

# Step 2: Hubungkan ke "Langit" (GitHub)
Lo harus kasih tahu Git lokal mau dikirim ke mana file-filenya.

git remote add origin https://github.com/erick-surbakti/nyoba-git (Ngenalin alamat repo GitHub lo ke Git lokal).

 # Step 3: Sinkronisasi (PENTING!)
Seringkali di GitHub udah ada file (kayak README.md atau .gitignore bawaan saat bikin repo di web). Lo harus tarik dulu biar nggak bentrok.

git pull origin main --rebase (Ambil file dari GitHub dan gabungin ke laptop lo dengan rapi).

# Step 4: Final Push
Kalo udah sinkron, baru deh lo "tembak" file-filenya ke GitHub.

git push -u origin main (Kirim semua commit lo ke GitHub. Flag -u fungsinya biar ke depannya lo cukup ngetik git push doang).
