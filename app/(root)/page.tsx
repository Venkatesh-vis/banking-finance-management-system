import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {
        firstName: "Venkatesh",
    };

    return (
        <section className="w-full p-8">
            <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn.firstName}
                subtext="Access and manage your account and transactions efficiently."
            />

            <div className="mt-8">
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={48000}
                />
            </div>
        </section>
    );
};

export default Home;