import { getContactForm } from "@/server/db/getContactForm";
import DeleteContact from "./_components/DeleteContact";

export default async function Page() {
  const contacts = await getContactForm();



  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">تواصل معنا</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">الاسم</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">الموبايل</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">الايميل</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">الرسالة</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">حذف</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact :{ id: string; name: string; phone: string; email: string; message: string;}) => (
                <tr key={contact.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{contact.name}</td>
                  <td className="py-3 px-4">{contact.phone}</td>
                  <td className="py-3 px-4">{contact.email}</td>
                  <td className="py-3 px-4">{contact.message}</td>
                  <td className="py-3 px-4 text-center">
                    <DeleteContact id={contact.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
