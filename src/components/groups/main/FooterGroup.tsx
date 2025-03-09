export default function FooterGroup() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    &copy; {new Date().getUTCFullYear()} Rian8337
                </p>
                <div className="is-flex is-justify-content-center is-align-items-center">
                    <a href="https://discord.gg/nyD92cE" className="pr-2">
                        <img
                            src="https://discord.com/api/guilds/316545691545501706/widget.png?style=shield"
                            alt="osu!droid Discord Server"
                        />
                    </a>
                    <a href="https://bulma.io">
                        <img
                            src="https://bulma.io/assets/images/made-with-bulma.png"
                            alt="Made with Bulma"
                            width="128"
                            height="24"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
