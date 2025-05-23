import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    // Đường dẫn gốc khi deloy (gh-pages cần đúng path)
    base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-1" : "/",

    // Thư mục chính chứa HTML, SCSS, JS
    root: "src",

    // Thư mục chứa các file tĩnh như ảnh, fonts, v.v
    publicDir: "../public",

    build: {
        // Nơi xuất ra sản phẩm sau khi build
        outDir: "../dist",
        emptyOutDir: true,

        // Khai báo các trang cần build (Nhiều trang)
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                about: path.resolve(__dirname, "src/about.html"),
                practice: path.resolve(__dirname, "src/practice.html"),
                blog: path.resolve(__dirname, "src/blog.html"),
                contact: path.resolve(__dirname, "src/contact.html"),
                // Thêm trang ở đây
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});
