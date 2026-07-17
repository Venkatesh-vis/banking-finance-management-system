import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const TotalBalanceBox = ({
                             accounts = [],
                             totalBanks,
                             totalCurrentBalance,
                         }: TotlaBalanceBoxProps) => {
    return (
        <section className="w-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">

                {/* Chart */}
                <div className="h-24 w-24 shrink-0 sm:h-28 sm:w-28 md:h-32 md:w-32">
                    <DoughnutChart accounts={accounts} />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left gap-3">

                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
                        Bank Accounts: {totalBanks}
                    </h2>

                    <div>
                        <p className="text-sm font-medium text-gray-500">
                            Total Current Balance
                        </p>

                        <div className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                            <AnimatedCounter amount={totalCurrentBalance} />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TotalBalanceBox;