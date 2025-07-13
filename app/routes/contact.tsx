import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - Paul Fischer" },
    { name: "description", content: "Get in touch with me for opportunities and collaborations." },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate required fields
  if (!name || !email || !message) {
    return json({ 
      success: false, 
      error: "All fields are required" 
    }, { status: 400 });
  }

  try {
    // Save to database
    await prisma.contact.create({
      data: {
        name: name.toString(),
        email: email.toString(),
        message: message.toString(),
      },
    });

    return json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon. Check out the About You page to see all sent messages!" 
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return json({ 
      success: false, 
      error: "Something went wrong. Please try again." 
    }, { status: 500 });
  }
};

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm always interested in hearing about new opportunities and interesting projects.
          Feel free to reach out! Sent messages can be found on the About You page.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h2>

          {actionData?.success && (
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6">
              {actionData.message}
            </div>
          )}

          {actionData?.error && (
            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
              {actionData.error}
            </div>
          )}

          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">📧</div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">paultsemingfischer@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">📍</div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Clear Water Bay, Hong Kong</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">💼</div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/paul-fischer-a68890278"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/paul-fischer-a68890278
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">🐙</div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">GitHub</h3>
                <a
                  href="https://github.com/PaulTsemingFischer"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/PaulTsemingFischer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}