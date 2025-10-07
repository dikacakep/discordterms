import { useState } from 'react';
import { FileText, Shield, ChevronRight, Bot } from 'lucide-react';

export default function LegalPages() {
  const [activePage, setActivePage] = useState('home');

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Bot className="w-20 h-20 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Discord Bot Legal Documents</h1>
          <p className="text-xl text-purple-100">Please review our Terms of Service and Privacy Policy</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => setActivePage('tos')}
            className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-12 h-12 text-indigo-600" />
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms of Service</h2>
            <p className="text-gray-600">Read our terms and conditions for using our Discord Bot</p>
          </button>

          <button
            onClick={() => setActivePage('privacy')}
            className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-12 h-12 text-purple-600" />
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Privacy Policy</h2>
            <p className="text-gray-600">Learn how we collect, use, and protect your data</p>
          </button>
        </div>
      </div>
    </div>
  );

  const TOSPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setActivePage('home')}
            className="mb-4 text-indigo-200 hover:text-white flex items-center transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-indigo-200 mt-2">Last Updated: October 7, 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By inviting, adding, or using our Discord Bot (the "Bot") in your Discord server, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Bot.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of the Bot after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Bot provides various features and functionalities for Discord servers, including but not limited to moderation tools, entertainment commands, utility features, and server management capabilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain the Bot's availability and functionality, but we do not guarantee uninterrupted or error-free service. The Bot is provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">By using our Bot, you agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Comply with Discord's Terms of Service and Community Guidelines</li>
              <li>Not use the Bot for any illegal, harmful, or malicious purposes</li>
              <li>Not attempt to exploit, hack, or reverse engineer the Bot</li>
              <li>Not use the Bot to spam, harass, or abuse other users</li>
              <li>Not overload or disrupt the Bot's functionality</li>
              <li>Be responsible for all activity that occurs through your use of the Bot</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Prohibited Activities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">You may not use our Bot to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Distribute malware, viruses, or other harmful code</li>
              <li>Engage in any form of harassment, hate speech, or discrimination</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data of other users without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Collection and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Bot may collect certain data to function properly, including server IDs, user IDs, message content (when necessary for commands), and usage statistics. Please refer to our Privacy Policy for detailed information about data collection and usage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy and handle all data in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All intellectual property rights in the Bot, including but not limited to code, design, graphics, and documentation, are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works based on our Bot without explicit permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your use or inability to use the Bot</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of the Bot</li>
              <li>Any bugs, viruses, or other harmful code</li>
              <li>Any errors or omissions in any content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to the Bot at any time, without prior notice, for any reason, including but not limited to violation of these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may stop using the Bot at any time by removing it from your Discord server.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the Bot or any part thereof at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Bot.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us through our support server or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setActivePage('home')}
            className="mb-4 text-purple-200 hover:text-white flex items-center transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-purple-200 mt-2">Last Updated: October 7, 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, store, and protect information when you use our Discord Bot (the "Bot"). We are committed to protecting your privacy and handling your data with care and respect.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our Bot, you consent to the data practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect several types of information to provide and improve our Bot's functionality:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li><strong>Server Information:</strong> Server ID, server name, server settings related to the Bot</li>
              <li><strong>User Information:</strong> User ID, username, discriminator, avatar</li>
              <li><strong>Usage Data:</strong> Commands used, feature interactions, timestamps</li>
              <li><strong>Technical Data:</strong> Error logs, performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 User-Provided Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Command Input:</strong> Data you provide when using Bot commands</li>
              <li><strong>Configuration Settings:</strong> Preferences and settings you configure</li>
              <li><strong>Message Content:</strong> Only when necessary for specific commands and features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide and maintain the Bot's functionality</li>
              <li>To process your commands and requests</li>
              <li>To improve and optimize the Bot's performance</li>
              <li>To troubleshoot technical issues and provide support</li>
              <li>To analyze usage patterns and develop new features</li>
              <li>To prevent abuse, fraud, and security issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure database management</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Active Data:</strong> Kept while the Bot is actively used in your server</li>
              <li><strong>Log Data:</strong> Typically retained for 30-90 days</li>
              <li><strong>User Settings:</strong> Retained until manually deleted or Bot is removed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With trusted third parties who assist in operating the Bot (e.g., hosting providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
              <li><strong>Security:</strong> To protect against fraud, abuse, or security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-3">You have the following rights regarding your data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to the processing of your data</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Withdrawal:</strong> Withdraw consent at any time by removing the Bot from your server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Bot is not intended for use by children under the age of 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children under 13.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Bot may integrate with or link to third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Bot operates on Discord's platform and is subject to Discord's Terms of Service and Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of the Bot after any changes constitutes your acceptance of the new Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Through our support Discord server</li>
              <li>By email at our designated privacy email address</li>
              <li>Through our website contact form</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to complying with applicable data protection laws, including GDPR (General Data Protection Regulation) for users in the European Union, CCPA (California Consumer Privacy Act) for California residents, and other relevant privacy regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {activePage === 'home' && <HomePage />}
      {activePage === 'tos' && <TOSPage />}
      {activePage === 'privacy' && <PrivacyPage />}
    </div>
  );
}
