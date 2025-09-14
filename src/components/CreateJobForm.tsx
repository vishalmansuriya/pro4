import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Job } from './mockData';

interface CreateJobFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: Omit<Job, 'id' | 'postedDate' | 'applicants'>) => void;
}

const CreateJobForm: React.FC<CreateJobFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: '',
    category: 'Job' as 'Job' | 'Internship',
    description: '',
    requirements: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.salary.trim()) newErrors.salary = 'Salary range is required';
    if (!formData.type) newErrors.type = 'Job type is required';
    if (!formData.description.trim()) newErrors.description = 'Job description is required';
    if (!formData.requirements.trim()) newErrors.requirements = 'Skills are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const jobData = {
        ...formData,
        requirements: formData.requirements.split(',').map(skill => skill.trim()).filter(skill => skill)
      };
      
      onSubmit(jobData);
      
      // Reset form
      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        type: '',
        category: 'Job',
        description: '',
        requirements: ''
      });
      setErrors({});
      onClose();
    }
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      title: '',
      company: '',
      location: '',
      salary: '',
      type: '',
      category: 'Job',
      description: '',
      requirements: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleCancel}
      />
      
      {/* Form Panel */}
      <div className={`ml-auto w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Create New Job</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-4">
              {/* Job Title */}
              <div>
                <Label htmlFor="title" className="text-gray-700">Job Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Enter job title"
                  className={`mt-1 ${errors.title ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-gray-700">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Enter company name"
                  className={`mt-1 ${errors.company ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-gray-700">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="Enter job location"
                  className={`mt-1 ${errors.location ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                )}
              </div>

              {/* Salary Range */}
              <div>
                <Label htmlFor="salary" className="text-gray-700">Salary Range</Label>
                <Input
                  id="salary"
                  value={formData.salary}
                  onChange={(e) => handleChange('salary', e.target.value)}
                  placeholder="e.g. $80,000 - $120,000"
                  className={`mt-1 ${errors.salary ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.salary && (
                  <p className="mt-1 text-sm text-red-500">{errors.salary}</p>
                )}
              </div>

              {/* Job Type */}
              <div>
                <Label htmlFor="type" className="text-gray-700">Job Type</Label>
                <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                  <SelectTrigger className={`mt-1 ${errors.type ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}>
                    <SelectValue placeholder="Select Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-500">{errors.type}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category" className="text-gray-700">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Job">Job</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Description */}
              <div>
                <Label htmlFor="description" className="text-gray-700">Job Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Enter job description"
                  rows={4}
                  className={`mt-1 ${errors.description ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>

              {/* Skills Required */}
              <div>
                <Label htmlFor="requirements" className="text-gray-700">Skills Required (comma-separated)</Label>
                <Input
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => handleChange('requirements', e.target.value)}
                  placeholder="e.g. JavaScript, React, Node.js"
                  className={`mt-1 ${errors.requirements ? 'border-red-400' : 'border-gray-300'} focus:border-blue-500`}
                />
                {errors.requirements && (
                  <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Create Job
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobForm;