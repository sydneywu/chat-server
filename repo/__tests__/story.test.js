import {repoStory} from '../index';

describe('RepoStory __tests__', function() {
    let newStory, insertedStory;

    beforeAll(async (done) => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        done();
    });

    afterAll(function(done) {
        done();
    });

    it('add story should add and return created story', async () => {
        newStory = {
            externalUserId: '1',
            data: '[]',
        };
        insertedStory = await repoStory.create(newStory);
        expect(insertedStory.externalUserId).toBe(newStory.externalUserId);
    });

    it('fetch one by id story should return correct story', async () => {
        let story = await repoStory.findOneById(insertedStory.id);
        expect(story.data).toBe(newStory.data);
    });

    it('fetch one story should return correct story', async () => {
        let story = await repoStory.findOne({externalUserId: newStory.externalUserId});
        expect(story.data).toBe(newStory.data);
    });


    it('update story should update and return updated story', async () => {
        let updates = {
            data: ["Hello"],
        };
        let story = await repoStory.update(insertedStory.id, updates);
        expect(story.data).toBe(updates.data);
    });

    it('fetch all categories should return at least one story', async () => {
        let stories = await repoStory.findAll();
        expect(stories.length).toBeGreaterThan(0);
    });

    it('should delete one story', async () => {
        let deletedStory = await repoStory.delete(insertedStory.id);
        expect(deletedStory).toBe(true) //return true for success and false for failure
    })
});