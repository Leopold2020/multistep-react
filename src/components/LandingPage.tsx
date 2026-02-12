import { Link } from "react-router"

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-600 via-purple-900 to-black text-center p-10 relative overflow-hidden">

            {/* Fake tracking background glow */}
            <div className="absolute w-[800px] h-[800px] bg-cyan-400 opacity-20 blur-[200px] animate-pulse rounded-full"></div>

            <h1 className="text-6xl md:text-8xl font-black uppercase bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,0,255,0.8)] animate-bounce">
                Hello, Human 👁️
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-bold text-lime-300 animate-pulse tracking-widest">
                We absolutely do NOT want your data*
            </p>

            <p className="text-xs text-gray-400 italic mt-2">
                *We definitely want your data.
            </p>

            <Link
                to={"/form/name"}
                className="
                    mt-10
                    px-12 py-6
                    text-2xl font-extrabold
                    uppercase tracking-wider
                    text-black
                    bg-gradient-to-r from-green-400 to-blue-500
                    rounded-full
                    shadow-[0_0_40px_rgba(0,255,255,0.8)]
                    animate-pulse
                    hover:scale-125
                    hover:rotate-3
                    hover:shadow-[0_0_80px_rgba(255,0,255,1)]
                    transition-all duration-300
                    border-4 border-white
                "
            >
                🚨 Surrender Personal Information 🚨
            </Link>

            {/* Fake legal nonsense */}
            <p className="absolute bottom-4 text-[10px] text-gray-500 max-w-lg animate-pulse">
                By clicking this button you agree to surrender your browsing history, childhood memories,
                WiFi password, grocery preferences, pet names, future hopes, and at least one embarrassing
                middle school story.
            </p>

        </div>
    )
}