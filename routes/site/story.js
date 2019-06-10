let express = require('express');
let router = express.Router();
import {repoStory} from '../../repo/index';

router.param('storyId', async (req, res, next, storyId) => {
    req.storyId = storyId;
    return next();
});

router.get('/', async function (req, res) {
    if(req.query.userId === null) throw new Error("No userId")
    let story = await repoStory.findOne({externalUserId: req.query.userId});
    res.json(story)
});

/**
 * @swagger
 * /story/{storyId}:
 *   get:
 *     summary: get single story
 *     description: Returns a list of stories
 *     tags:
 *       - story
 *     parameters:
 *       - in: path
 *         name: storyId
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: List of stories
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id: string
 *               externalUserId: string
 *               data: string
 *             example:
 *               id: "1"
 *               externalUserId: "1"
 *               data: "[]"
 */
router.get('/:storyId', async function (req, res) {
    let story = await repoStory.findOneById(req.storyId);
    res.json(story)
});

router.post('/', async function (req, res) {
    let postData = req.body;
    let story = await repoStory.create(postData);
    res.json(story)
});

router.put('/:storyId', async function (req, res) {
    let postData = req.body;
    let story = await repoStory.update({id: req.storyId, postData: postData});
    res.json(story)
});

router.delete('/:storyId', async function (req, res) {
    let deleteResponse = await repoStory.delete(req.storyId);
    res.json({success: deleteResponse})
});


module.exports = router;