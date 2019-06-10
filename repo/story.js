import Models from '../sequelize/models';

const Story = Models.Story;


let repoStory = {
    findOneById: async (id) => {
        let story = await Story.findById(id);
        return story
    },

    findOne: async ({externalUserId}) => {
        if(!externalUserId) throw new Error("can't findOne without externalUserId")
        let query = {};
        if(externalUserId) query = {where: {externalUserId: externalUserId}};
        let story = await Story.findOne(query);
        return story
    },

    findAll: async () => {
        let stories = await Story.findAll();
        return stories
    },

    create: async ({data, externalUserId}) => {
        try{
            let story = await Story.create({data, externalUserId});
            return story

        } catch(e){
            console.log(e)
        }
    },

    update: async ({id, postData}) => {
        let story = await Story.findById(id);
        try{
            await story.update(postData);
        }catch(e){
            console.log(e)
        }

        return story
    },

    delete: async (id) => {
        let story = await Story.findById(id);
        if (story) {
            await story.destroy();
            return true
        } else {
            return false
        }
    }
};

export default repoStory