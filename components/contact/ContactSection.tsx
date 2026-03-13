"use client";

import { personalInfo } from "@/lib/data";
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined, DownloadOutlined } from '@ant-design/icons';

export default function ContactSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hari_Manoj_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 md:py-28 relative bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Available for full-time opportunities and consulting projects
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <MailOutlined className="text-xl text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 mb-1">Email</div>
                  <div className="text-slate-900 font-medium break-all">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <PhoneOutlined className="text-xl text-green-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 mb-1">Phone</div>
                  <div className="text-slate-900 font-medium">{personalInfo.phone}</div>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 my-8"></div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium"
              >
                <GithubOutlined className="text-lg" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                <LinkedinOutlined className="text-lg" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 rounded-lg transition-colors font-medium"
              >
                <DownloadOutlined className="text-lg" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Status */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
