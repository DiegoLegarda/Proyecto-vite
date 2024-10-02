function ComponenteDaisyUI() {
    return (
        <>
            <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>

            <div>
                <button className="btn btn-outline btn-info">Info</button>
                <button className="btn btn-outline btn-success">Success</button>
                <button className="btn btn-outline btn-warning">Warning</button>
                <button className="btn btn-outline btn-error">Error</button>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ComponenteDaisyUI;