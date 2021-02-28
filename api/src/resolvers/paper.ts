enum PaperOrdering {
  titleAsc = 'title_asc',
  titleDesc = 'title_desc'
}

interface IPaper {
  readonly id: string,
  readonly added: Date,
  readonly description?: string,
  readonly excerpt?: string,
  readonly image: { 
    readonly url: string
  },
  readonly subTitle?: string,
  readonly title: string,
}

interface IPaperArgs {
  readonly id: string,
}

interface IPapersArgs {
  readonly first: number,
  readonly offset: number,
  readonly orderBy: PaperOrdering
}

interface IContext {
  readonly db: {
    readonly papers: IPaper[]
  }
}

export const paper = (
  obj: unknown,
  args: IPaperArgs,
  context: IContext
): IPaper | undefined => context.db.papers.find( (p): boolean => p.id === args.id)

export const papers = (
  obj: unknown,
  args: IPapersArgs,
  context: IContext
): IPaper[] => context.db.papers;