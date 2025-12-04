export class ExperienceObject
{
    constructor(title, bullet)
    {
        this.title = title;
        this.bullet = bullet;
    }
}

export class EducationObject
{
    constructor(title, bullet)
    {
        this.title = title;
        this.bullet = bullet;
    }
}

export class SeminarsObject
{
    constructor(title, description)
    {
        this.title = title;
        this.description = description;
    }
}

export class PresentationObject
{
    constructor(title, location, link, imgSrc=null)
    {
        this.title = title;
        this.location = location;
        this.imgSrc = imgSrc;
        this.link = link;
    }

    hasImg()
    {
        return this.imgSrc !== null;
    }
}