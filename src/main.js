const core = require('@actions/core')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const webhookUrl = core.getInput('webhook_url', { required: true })

    const response = await fetch(webhookUrl, {
      method: 'POST'
    })

    let result

    if (response.ok) {
      result = {
        message: 'Service updated successfully',
        details: null
      }
    } else {
      result = await response.json()
    }

    // Set outputs for other workflow steps to use
    core.setOutput('response', result)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
