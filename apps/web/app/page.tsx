"use client"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.insert);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World from the web</h1>
        <Button onClick={() => { addUser() }} size="sm">
          Add Random John Doe
        </Button>
      </div>


      <div className="ml-2 flex flex-col items-center justify-center gap-4">
        {users === undefined ? (
          <p className="text-gray-500 italic">Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-500 italic">No users found</p>
        ) : (
          <table className="border border-gray-300 text-sm rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(users[0] ?? {}).map((key) => (
                  <th key={key} className="px-3 py-2 border-b border-gray-300 text-left">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {Object.values(user).map((val, j) => (
                    <td key={j} className="px-3 py-2 border-b border-gray-200">
                      {String(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
