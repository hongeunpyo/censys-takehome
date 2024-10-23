import { Header } from "../../components/Headers";
import { SearchInput } from "../../components/Inputs";

export function MainPage() {
    return (
        <div className="h-screen w-screen">
            <Header>
                <SearchInput />
            </Header>
        </div>
    )
}