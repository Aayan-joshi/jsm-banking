import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = ({type = "title", title, subtext, user} : HeaderBoxProps) => {
  const loggedIn = {firstName : "Aayan", lastName: "Joshi", email: "aayan.joshi@hotmail.com"}


    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                      type="greeting" 
                      title="Welcome"
                      user={loggedIn?.firstName || 'Guest'}  
                      subtext = "Access and manage your account and transactions perfectly!"
                    />
                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1000}
                    />
                </header>

                RECENT TRANSACTIONS

                </div>
                <RightSidebar 
                    user = {loggedIn}
                    transactions={[]}
                    banks = {[{$id: "test",currentBalance: 123.50}, {$id: 'test2', currentBalance: 900}]}
                />
        </section>
    );
};

export default Home;
