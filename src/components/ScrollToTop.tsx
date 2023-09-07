import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollToTop.css";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    addEventListener("scroll", () => {
        setVisible(document.documentElement.scrollTop > 300);
    });

    return (
        <FaArrowCircleUp
            className="scroll-to-top"
            style={{
                display: visible ? "inline" : "none",
            }}
            onClick={() => {
                scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        />
    );
}
