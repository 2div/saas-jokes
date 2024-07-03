import Image from "next/image";
import NavigationHeader from "./components/NavigationHeader";
import GenerateJoke from "./components/GenerateJoke";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <NavigationHeader />
      <div className="flex flex-col items-center justify-center p-5 flex-grow">
        <div className="container flex flex-col justify-center items-center gap-4 text-center ">
          <h1 className="text-4xl "> Welcome to SaaS Project tutorial application</h1>
          <p>Generate hilarious Chuch Norris jokes that really aren't even that funny </p>
          <GenerateJoke /> 
        </div>
      </div>                                                                                                                                                                                        
    </main>
  );
}
