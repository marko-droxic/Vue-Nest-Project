const jobService = (request: any) => ({

    async getJobs( handleToast = false) {
        return request('get', { url: `jobs` }, handleToast);
    },

    async createJob(jobData: any, handleToast = false) {
        return request('post', { url: `job`, data: jobData  }, handleToast);
    },

    async updateJob(jobId: number, jobData: any,  handleToast = false) {
        return request('patch', { url: `job/${jobId}`, data: jobData }, handleToast);
    },

    async removeJob(jobId: number, handleToast = false) {
        return request('delete', { url: `job/${jobId}`}, handleToast);
    },
})