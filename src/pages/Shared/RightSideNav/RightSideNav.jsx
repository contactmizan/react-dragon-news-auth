import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-3xl">Login With</h2>

                <button className="btn  btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>

                <button className="btn  btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>

            </div>
        </div>
    );
}

export default RightSideNav;