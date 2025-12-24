export type User = {
    id: number;
    first_name: string;
    email: string;
};

export const users: User[] = [
     { id: 1, first_name: "Paulita", email: "pcrosham0@paypal.com" },
     { id: 2, first_name: "Corabelle", email: "cbottrill1@seattletimes.com" },
     { id: 3, first_name: "Meryl", email: "mpoltone2@mashable.com" },
     { id: 4, first_name: "Trude", email: "tleclaire3@discuz.net" },
     { id: 5, first_name: "Alfie", email: "asunley4@skype.com" },
     { id: 6, first_name: "Reta", email: "rmilson5@washington.edu" },
     { id: 7, first_name: "Edlin", email: "edrummond6@ocn.ne.jp" },
     { id: 8, first_name: "Meg", email: "mjorgensen7@deliciousdays.com" },
     { id: 9, first_name: "Verine", email: "vjedrys8@people.com.cn" },
     { id: 10, first_name: "Fletch", email: "fwashtell9@dagondesign.com" },
     { id: 11, first_name: "Mozzam", email: "mozzamshahid906@gmail.com" }
 ]

export default function Data() {
    return (
        <div className="flex justify-center mt-10">
            <table className='border w-full border-gray-300 rounded-lg overflow-hidden'>
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">First Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b">{user.id}</td>
                            <td className="px-4 py-2 border-b">{user.first_name}</td>
                            <td className="px-4 py-2 border-b">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}