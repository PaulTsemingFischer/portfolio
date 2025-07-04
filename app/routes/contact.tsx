import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - Your Name" },
    { name: "description", content: "Get in touch with me for opportunities and collaborations." },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Add your form submission logic here
  // For now, we'll just return a success message
  console.log({ name, email, message });

  return json({ success: true, message: "Thank you for your message! I'll get back to you soon." });
};

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I'm always interested in hearing about new opportunities and interesting projects.
          Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>

          {actionData?.success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
              {actionData.message}
            </div>
          )}

          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">📧</div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">📍</div>
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">Your City, State</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">💼</div>
              <div>
                <h3 className="font-medium text-gray-900">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-xl">🐙</div>
              <div>
                <h3 className="font-medium text-gray-900">GitHub</h3>
                <a
                  href="https://github.com/yourusername"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}