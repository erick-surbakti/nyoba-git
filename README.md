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
