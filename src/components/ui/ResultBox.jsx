import "../../styles/ResultBox.css";

function ResultBox({ title, result }) {
    return (
        <div className="result-box">
            <h3 className="result-title">{title}</h3>

            <div className="result-content">
                {result ? result : "Your result will appear here..."}
            </div>
        </div>
    );
}

export default ResultBox;