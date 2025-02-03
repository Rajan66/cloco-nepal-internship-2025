import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/header/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // `(home)`: this is a way to create route groups in Nextjs
    // there's no `/home` route, the page inside home uses `/` route
    // this helps organize our routes and keep related routes together
    return (
        <section >
            {/* add header and footer */}
            <Navbar />
            <div className="mx-[20%]">
                {children}
            </div>
            <Footer/>
        </section>
    );
}
