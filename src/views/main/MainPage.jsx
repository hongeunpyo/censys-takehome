import { Header } from "../../components/Headers";
import { HostCard } from "../../components/HostCard";
import { SearchInput, useSearch } from "../../components/Inputs";

export function MainPage() {
    const { handleSubmit, handleInputChange, setCursor, links, hits } = useSearch();

    return (
        <div className="min-h-screen h-full w-screen overflow-auto">
            <Header>
                <SearchInput onSubmit={handleSubmit} onChange={handleInputChange} />
            </Header>
            <div className="my-4 px-4 h-auto flex flex-col gap-2">
                {hits?.map((hit) => (
                    <HostCard key={hit.ip} ip={hit.ip} services={hit.services} />
                ))}
            </div>
            <div className="flex justify-center mt-auto w-full gap-2 border-t-2 border-white p-2">
                <button 
                    className="disabled:bg-slate-200 disabled:text-slate-500"
                    onClick={() => setCursor(links?.prev)}
                    disabled={!links?.prev}
                >
                    Prev
                </button>
                <button
                    className="disabled:bg-slate-200 disabled:text-slate-500"
                    onClick={() => setCursor(links?.next)}
                    disabled={!links?.next}
                >
                    Next
                </button>
            </div>
        </div>
    )
}