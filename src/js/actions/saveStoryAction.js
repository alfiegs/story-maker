export function saveStoryAction(dataFromStory) {
    console.log(`dataFromStory.storyToSave: ${dataFromStory.storyToSave}`)
    return {
        type: "SAVE_STORY", 
        storyToSave: dataFromStory.storyToSave,
        seed: dataFromStory.seed
    }
}