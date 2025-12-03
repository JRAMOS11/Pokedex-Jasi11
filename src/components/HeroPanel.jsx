export const HeroPanel = (
    {
        photoId = "120"
    }
) => {
    return (
        <div className="w-full h-[75vh] overflow-hidden relative max-w-screen">
            <picture className="w-full h-full">
                <source srcset={`https://picsum.photos/id/${photoId}/1300/720`} media="(min-width:1025px)" />
                <source srcset={`https://picsum.photos/id/${photoId}/1024/640`} media="(min-width:720px)" />
                <img className="w-full h-full object-cover"  src={`https://picsum.photos/id/${photoId}/480/480`} alt="Hero Panel Images" />
            </picture>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-80 p-8 bg-white rounded-2xl shadow-md">
                <h2>Panel Hero</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sunt, enim.</p>
                <button className="btn-principal" />
            </div>
        </div>
    );
}