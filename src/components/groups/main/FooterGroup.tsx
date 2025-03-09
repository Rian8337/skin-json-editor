export default function FooterGroup() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    &copy; {new Date().getUTCFullYear()} Rian8337
                    <br></br>
                    <a href="https://discord.gg/nyD92cE">
                        <img
                            src="https://discord.com/api/guilds/316545691545501706/widget.png?style=shield"
                            alt="osu!droid Discord Server"
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
}
